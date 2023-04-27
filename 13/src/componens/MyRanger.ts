export class MyRanger {
    private inputRange: HTMLInputElement | null;
    private incrase: boolean
    private static run: boolean = true
    constructor(elementName: String) {
        this.inputRange = document.querySelector(`#${elementName}`)
        this.incrase = true
        if (this.inputRange != null) {
            this.inputRange.min = "0"
            this.inputRange.max = "100"
            this.inputRange.value = "0"
            //this.inputRange.disabled = true
            this.inputRange.addEventListener("click", this.onClick)
            this.inputRange.addEventListener("onchange", (e) => { e.preventDefault() })
            this.inputRange.addEventListener("oninput", (e) => { e.preventDefault() })
        }
    }
    onClick(evt: Event) {
        evt.preventDefault()
        MyRanger.run = false
    }
    start() {
        if (MyRanger.run) setTimeout(this.changeInputRangeValue, 1, this)
    }

    changeInputRangeValue(element: MyRanger) {
        if (element.inputRange != null) {
            element.inputRange.value = element.incrase ? (+element.inputRange.value + 5).toString() : (+element.inputRange.value - 5).toString()
            if (+element.inputRange.value === 100) {
                element.incrase = false
            }
            if (+element.inputRange.value === 0) {
                element.incrase = true
            }
        }
        element.start()
    }
}