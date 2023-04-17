from django.db import models

# Create your models here.

class Todo(models.Model):
    taksId = models.IntegerField()
    task=models.CharField(max_length=2000)
    body=models.TextField()
    isDone =models.BooleanField()

    def __str__(self) -> str:
        return f"{self.id} task: {self.task}"