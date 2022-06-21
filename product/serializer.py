from  rest_framework import serializers

from .models import Product, Category

class ProductSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field='slug', read_only=True)
    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'slug',
            'category',
            'get_absolute_url',
            'description',
            'price',
            'get_image',
            'get_thumbnail',
        )

class CategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)
    class Meta:
        model = Category
        fields = (
            'name',
            'slug',
            'products',
            'get_absolute_url'
        )