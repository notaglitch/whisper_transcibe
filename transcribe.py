import whisper
import sys
import os
from tqdm import tqdm

def transcribe_audio(audio_path, output_path="output.txt", model_size="small"):
    model = whisper.load_model(model_size)

    print(f"Loading audio: {audio_path}")

    print("Transcribing...")
    result = model.transcribe(audio_path)

    total_segments = len(result["segments"])
    pbar = tqdm(total=total_segments, desc="Processing", unit=" segment")

    transcript = ""
    for segment in result["segments"]:
        transcript += segment["text"] + " "
        pbar.update(1)

    pbar.close()

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(transcript.strip())

    print(f"Transcription saved to {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python transcribe.py <audio_file>")
        sys.exit(1)

    audio_file = sys.argv[1]

    if not os.path.exists(audio_file):
        print(f"Error: File '{audio_file}' not found.")
        sys.exit(1)

    transcribe_audio(audio_file)
