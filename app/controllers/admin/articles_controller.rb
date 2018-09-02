class Admin::ArticlesController < Admin::BaseController
  # GET /admin/articles
  def index
    @articles = Article.all
  end

  # GET /admin/articles/1
  def show
    @article = Article.find(params[:id])
  end

  # GET /admin/articles/new
  def new
    @article = Article.new
    @categories = Category.all
  end 

  # POST /admin/articles
  def create
    @article = Article.new(article_params)

    if @article.save
      redirect_to @article, notice: 'Article created.'
    else
      render :new
    end
  end

  # GET /admin/articles/1/edit
  def edit
    @article = Article.find(params[:id])
  end

  # PUT /admin/articles/1
  def update
    @article = Article.find(params[:id])

    if @article.update(params)
      redirect_to @article, notice: 'Article updated.'
    else
      render :edit
    end
  end

  # DELETE /admin/articles/1
  def destroy
    @article = Article.find(params[:id])
    @article.destroy

    redirect_to :admin_articles, notice: 'Article destroyed.'
  end

  private

  def article_params
    params.require(:article).permit(:title, :description, :content)
  end
end