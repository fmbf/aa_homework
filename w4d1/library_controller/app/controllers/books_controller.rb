class BooksController < ApplicationController
  def index
    # your code here
    @books = Book.all
  end

  def new
    # your code here
    render :new
  end

  def create
    # your code here
    ######### works ################
    # Book.create(book_params)
    # redirect_to books_url
    ###############################

    book = Book.new(book_params)

    if book.save
      redirect_to books_url
    else
      book.errors.full_messages
    end
  end

  def destroy
    # your code here
    book = Book.find(params[:id])#.destroy
    if book.destroy
      redirect_to books_url
    else
      render plain: "Destroy failed."
    end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
