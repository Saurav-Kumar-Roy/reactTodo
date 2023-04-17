from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Todo
from .serializer import TodoSerializer 

# Create your views here.

class TodoDetail(APIView):
    def get(self,request):
        obj = Todo.objects.all()
        serializer = TodoSerializer(obj,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def post(self,request):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)

class TodoUpdate(APIView):
    def get(self,request,id):
        try:
            obj = Todo.objects.get(id=id)
        except Todo.DoesNotExist:
            msg = {"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        
        serializer = TodoSerializer(obj)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def put(self,request,id):
        try:
            obj = Todo.objects.get(id=id)
        except Todo.DoesNotExist:
            msg = {"msg":"not found"}
            return Response(msg, status=status.HTTP_400_BAD_REQUEST)
        
        serializer=TodoSerializer(obj,request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self,request,id):
        try:
            obj = Todo.objects.get(id=id)
        except Todo.DoesNotExist:
            msg = {"msg":"not found"}
            return Response(msg, status=status.HTTP_400_BAD_REQUEST)
        
        serializer=TodoSerializer(obj,request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

    def delete(self,request,id):
        try:
            obj = Todo.objects.get(id=id)
        except Todo.DoesNotExist:
            msg = {"msg":"not found"}
            return Response(msg, status=status.HTTP_400_BAD_REQUEST)
        
        obj.delete()
        msg = {"msg":"Deleted"}
        return Response(msg,status=status.HTTP_204_NO_CONTENT)