class ProductController < ApplicationController
  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy

    redirect_to products_path
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :price)
  end
end
