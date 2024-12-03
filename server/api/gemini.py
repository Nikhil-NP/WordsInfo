from dotenv import load_dotenv
load_dotenv() #ensures that .env is working 


import os # to get the .env geminiApiKey
import requests

import google.generativeai as genai 





def fetch_gemini_api(query):
    """
    This takes a query user input and returns a responce i.e info about the quer

    Args:
        str : a string a input message for gemini api

    Return: 
        json : contaning (query,responce)  output i.e is a response to the user input(query)
    """
    api_key = os.getenv("GEMINI_AI_API_KEY") #offical gemini api key
    if not api_key:
        return{
            'api key is not valid/not setup'
        }
    
    try:
        
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel(
            "gemini-1.5-flash",
            system_instruction="act like search engine, use  the offical tone,minimum 200 words ")
        response = model.generate_content(query)
        data = response.text

        return {
            'query' : query,
            'info' : data
        }
    except Exception as e:  # error handeling
        return f"An error occurred: {str(e)}"
