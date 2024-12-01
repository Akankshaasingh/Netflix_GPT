import { HfInference } from '@huggingface/inference';
import { HF_API_KEY } from "./constants";

const hf = new HfInference(HF_API_KEY); // Replace 'your_access_token' with your Hugging Face token

export default hf;

