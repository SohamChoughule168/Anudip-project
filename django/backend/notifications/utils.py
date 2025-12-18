from twilio.rest import Client
import os

TWILIO_SID = os.getenv('TWILIO_SID')
TWILIO_AUTH = os.getenv('TWILIO_AUTH')

def send_sms(to, body):
    client = Client(TWILIO_SID, TWILIO_AUTH)
    message = client.messages.create(
        body=body,
        from_='+1234567890',  # Replace with Twilio Number
        to=to
    )
    return message.sid