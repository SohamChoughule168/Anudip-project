from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Loan
from .serializers import LoanSerializer

class LoanApplicationView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data
        serializer = LoanSerializer(data=data)
        if serializer.is_valid():
            serializer.save(borrower=request.user)
            return Response({"message": "Loan Application Submitted"})
        return Response(serializer.errors)