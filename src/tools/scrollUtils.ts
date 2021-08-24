const EMPTY_HANDLER = () => {};

class ScrollUtils {
    bottomEventHandler: () => void;
    isBottom: boolean

    constructor() {
        this.bottomEventHandler = EMPTY_HANDLER;
        this.isBottom = false;
    }

    // reference: https://ju-note.tistory.com/14
    getScrollTop() {
        if(window.pageYOffset !== undefined) {
            return window.pageYOffset;
        } else {
            return document.documentElement.scrollTop || document.body.scrollTop;
        }
    }

    getMaxScrollTop() {
        return (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
    }

    isScrolledBottom() {
        return this.getScrollTop() > this.getMaxScrollTop() - 10;
    }

    addBottomEventHandler(handler: () => void) {
        this.bottomEventHandler = () => {
            if(this.isScrolledBottom()) {
                if(!this.isBottom) {
                    handler();
                    this.isBottom = true;
                }
            } else {
                this.isBottom = false;
            }
        }
        document.addEventListener("scroll", this.bottomEventHandler);
        
    }

    removeBottomEventHandler() {
        document.removeEventListener("scroll", this.bottomEventHandler);
        this.bottomEventHandler = EMPTY_HANDLER;
    }
}

export default new ScrollUtils();