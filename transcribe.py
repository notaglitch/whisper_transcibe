import whisper
import sys
import os

def transcribe_audio(audio_path, output_path="output.txt", model_size="small"):
	model = whisper.load_model(model_size)

	print(f"Transcribing {audio_path}...")
	result = model.transcribe(audio_path)


	with open(output_path, "w", encoding="utf-8") as f:
		f.write(result["text"])

	print(f"Transcription saved to {output_path}")

if __name__ == "__main__":
	if len(sys.argv) < 2:
		print("Usage: python transcribe.py <audio_file>")
		sys.exit(1)

	audio_file = sys.argv[1]

	if not os.path.exists(audio_file):
		print(f"Error: File '{audio_file}' not found. ")
		sys.exit(1)

	transcribe_audio(audio_file)
