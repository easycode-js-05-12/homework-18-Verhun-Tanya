import { ActiveRoute } from './../core/active.route.service'; 
import { NewsService } from './../services/news.service';
import { AuthService } from './../services/auth.service';

export class NewsComponent {
    constructor() {
        this._autService = new AuthService(); 
        this._activeRoute = new ActiveRoute();
        this._newsService = new NewsService();
        

        this._news;
    }
    async beforeRender() {
            this._news = await this._newsService.getNews(this._autService.token);
    }

    render() {
        return `
        <div class="container ng-star-inserted">
            <div class="news-item bg-light-secondary d-flex flex-column flex-lg-row ng-star-inserted">
                <div class = "item-info d-flex flex-row flex-lg-column flex-wrap flex-md-nowrap align-items-center flex-shrink-0" style="margin-top:20px">
                <div class="author-info-wrapper d-flex flex-row flex-lg-column align-items-center overflow-hidden">
                    <a class = "author-img overflow-hidden" href = "/${this._news.news[0].owner._id}">
                        <img src="${this._news.news[0].owner.avatar}">
                    </a>
                    <div class="author-info d-flex flex-column align-items-start align-items-lg-center">
                        <a class="author-name text-center text-overflow-ellipsis" href = "/${this._news.news[0].owner._id}" style="text-decoration: none; color: black">${this._news.news[0].owner.full_name}</a>
                        <span class="author-country">${this._news.news[0].owner.country}</span>
                    </div>
                </div>
                <button class="btn btn-bg-light align-self-center btn-border-gradient ng-star-inserted btn-outline-info">Follow</button>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <img src="${this._news.news[0].pictures[0].url}" style="width: 100%; height: auto">
                    </div>
                </div>
            </div>
        </div>

        
        `}

    afterRender() {

    }
}