from rest_framework.views import APIView
from rest_framework.response import Response
from .utils import calculate_emi

class CalculateEMIView(APIView):
    def post(self, request):
        principal = request.data['amount']
        rate = request.data['interest_rate']
        tenure = request.data['tenure']
        emi = calculate_emi(principal, rate, tenure)
        return Response({"emi": emi})