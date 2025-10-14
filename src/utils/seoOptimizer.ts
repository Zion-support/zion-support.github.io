';'
  type?: 'website' | 'article' | 'product' | 'profile';'
      this.setMetaTag('twitter:site', `@${this.config.twitterHandle}`);''
  private setMetaTag(name: string, content: string, attribute: string="name" meta = document.querySelector(`meta[${attribute}="${name}"