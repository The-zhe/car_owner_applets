const SCROLL_SAFE_AREA = 200
const REACH_BOTTOM_BOUNCE_AREA = 150
export default {
	data() {
		return {
			showHeader: true,
			_scrollTop: 0,
			_animating: false,
			_reachBottom: false,
			_reachBottomArea: null
		}
	},
	methods: {
		_toggleShowHeader(showHeader) {
			this.showHeader = showHeader
			this._animating = true
			setTimeout(() => {
				if (this._animating) {
					return
				}
				this._animating = false
			}, this._duration || 300)
		}
	},
	onPageScroll(e) {
		const originScrollTop = this._scrollTop
		const originShowHeader = this.showHeader
		this._scrollTop = e.scrollTop
		if (this._reachBottom) {
			// 触底后 记录触底区域
			this._reachBottomArea = [e.scrollTop, e.scrollTop + REACH_BOTTOM_BOUNCE_AREA]
			this._reachBottom = false
		}
		if (this._scrollTop <= SCROLL_SAFE_AREA) {
			// 在安全区域内 显示头部
			if (!originShowHeader) {
				this._toggleShowHeader(true)
			}
		} else {
			// 不在安全区域 进行判断
			if (originScrollTop < this._scrollTop) {
				// 向下滑动
				if (originShowHeader) {
					this._toggleShowHeader(false)
				}
			} else if (originScrollTop > this._scrollTop) {
				// 向上滚 并且不在触底区域内 显示头部
				if (!originShowHeader 
					&& !(
						this._reachBottomArea
						&& this._scrollTop >= this._reachBottomArea[0]
						&& this._scrollTop <= this._reachBottomArea[0]
					)
				) {
					this._toggleShowHeader(true)
				}
			}
		}
	},
	onReachBottom() {
		this._reachBottom = true
	}
}