from django.shortcuts import render

# Create your views here.

from django.shortcuts import render, redirect, get_object_or_404
from .models import Product, Cart, CartItem, Order

def product_list(request):
    products = Product.objects.all()
    return render(request, 'shop/product_list.html', {'products': products})

def product_detail(request, pk):
    product = get_object_or_404(Product, pk=pk)
    return render(request, 'shop/product_detail.html', {'product': product})

def cart_detail(request):
    cart = request.user.cart
    return render(request, 'shop/cart_detail.html', {'cart': cart})

def cart_add(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    cart, created = Cart.objects.get_or_create(user=request.user)
    cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
    cart_item.quantity += 1
    cart_item.save()
    return redirect('cart_detail')

def order_create(request):
    cart = request.user.cart
    total_price = sum(item.get_total_price() for item in cart.cartitem_set.all())
    order = Order.objects.create(user=request.user, total_price=total_price)
    cart.cartitem_set.all().delete()
    return redirect('product_list')

