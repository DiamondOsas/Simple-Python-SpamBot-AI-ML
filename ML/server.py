# main.py requirements
import os
import zipfile
import logging
import requests
from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
from transformers import AutoTokenizer

# -----------------------------
# Logging Setup
# -----------------------------
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# -----------------------------
# Ngrok Integration
# -----------------------------
import asyncio
import subprocess
import threading
import time
import urllib.request
import json

# -----------------------------
# App Initialization
# -----------------------------
app = FastAPI(title="Spam Detection API")

# Global variable to store ngrok URL
ngrok_url = None

# -----------------------------
# Model Download & Extraction
# -----------------------------
MODEL_ZIP_URL = 'https://drive.google.com/uc?id=1bXPUvtlf_NO-Yx_8AT5l06dTaN8_z6l5'
MODEL_DIR = "model"
MODEL_H5_FILE = os.path.join(MODEL_DIR, "spam_transformer_model.h5")  # adjust if inside folder
TOKENIZER_DIR = os.path.join(MODEL_DIR, "spam_transformer_model")    
  # if tokenizer saved

def download_and_extract_model():
    if not os.path.exists(MODEL_DIR):
        os.makedirs(MODEL_DIR)

    zip_path = os.path.join(MODEL_DIR, "model.zip")
    logger.debug("Starting model download...")

    # Download model
    with requests.get(MODEL_ZIP_URL, stream=True) as r:
        if r.status_code != 200:
            logger.error(f"Failed to download model. Status code: {r.status_code}")
            raise Exception("Model download failed")
        with open(zip_path, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    logger.debug("Model downloaded successfully.")

    # Extract
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(MODEL_DIR)
    logger.debug("Model extracted successfully.")

    os.remove(zip_path)
    logger.debug("Zip file removed.")

download_and_extract_model()

# -----------------------------
# Load Tokenizer
# -----------------------------
logger.debug("Loading tokenizer...")
tokenizer = AutoTokenizer.from_pretrained(TOKENIZER_DIR)
logger.debug("Tokenizer loaded.")

# -----------------------------
# Load Model
# -----------------------------
logger.debug("Loading Keras model...")
model = load_model(MODEL_H5_FILE)
logger.debug("Model loaded into memory.")

# -----------------------------
# Helper Function for Prediction
# -----------------------------
MAX_LEN = 128  # same as during training

def preprocess_text(text: str):
    """Tokenizes and pads text for the model."""
    encodings = tokenizer(
        [text],
        padding='max_length',
        truncation=True,
        max_length=MAX_LEN,
        return_tensors="tf"
    )
    return encodings['input_ids'], encodings['attention_mask']

def predict_label(text: str):
    input_ids, attention_mask = preprocess_text(text)
    logits = model.predict({'input_ids': input_ids, 'attention_mask': attention_mask})
    prediction = int(logits[0][0] > 0.5)
    return "spam" if prediction == 1 else "ham"

# -----------------------------
# API Endpoints
# -----------------------------
@app.get("/health")
async def health_check():
    return {"status": "ok"}

@app.post("/predict")
async def predict(request: Request):
    try:
        data = await request.json()
        message = data.get("message")
        if not message:
            raise ValueError("No message provided in request")
        logger.debug(f"Received message: {message}")

        result = predict_label(message)
        logger.debug(f"Prediction: {result}")
        return JSONResponse(content={"prediction": result})

    except Exception as e:
        logger.error(f"Error processing request: {e}")
        raise HTTPException(status_code=400, detail=str(e))

# -----------------------------
# Ngrok Setup Function
# -----------------------------
def setup_ngrok():
    global ngrok_url
    try:
        # Start ngrok process
        ngrok_process = subprocess.Popen(['ngrok', 'http', '8000'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        
        # Wait a moment for ngrok to start
        time.sleep(3)
        
        # Get the public URL from ngrok API
        with urllib.request.urlopen('http://localhost:4040/api/tunnels') as response:
            data = json.loads(response.read().decode())
            ngrok_url = data['tunnels'][0]['public_url']
            
        print(f"Ngrok URL: {ngrok_url}")
        return ngrok_process
    except Exception as e:
        print(f"Failed to start ngrok: {e}")
        return None

# -----------------------------
# Main Execution
# -----------------------------
if __name__ == "__main__":
    import uvicorn
    
    # Setup ngrok in a separate thread
    ngrok_process = setup_ngrok()
    
    # Start the FastAPI server
    uvicorn.run(app, host="0.0.0.0", port=8000)
    
    # Clean up ngrok process when done
    if ngrok_process:
        ngrok_process.terminate()
