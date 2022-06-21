from django.urls import path, include
from product import views


urlpatterns = [
    path('latest-products/', views.LatestProductsView.as_view()),
    path('products/', views.ProductsView.as_view()),
    path('products/<slug:category_slug>/<slug:product_slug>/', views.ProductDetailView.as_view()),
    path('products/<slug:category_slug>/', views.CategoryDetailView.as_view()),
]