from django.shortcuts import render
from django.urls import path
from . import views

urlpatterns = [
    path('', lambda request: render(request, 'index.html'), name='landing-page'),
    path('', views.product_list, name='product_list'),
    path('product/<int:pk>/', views.product_detail, name='product_detail'),
    path('cart/', views.cart_detail, name='cart_detail'),
    path('cart/add/<int:product_id>/', views.cart_add, name='cart_add'),
    path('order/', views.order_create, name='order_create'),
]
