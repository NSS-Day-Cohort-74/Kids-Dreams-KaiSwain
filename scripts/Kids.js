import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}


document.addEventListener(
    "click",
    (clicked) => {
        const clickedTarget = clicked.target
        if(clickedTarget.dataset.type === "child") {
            window.alert(`${clickedTarget.innerHTML}'s wish is to ${clickedTarget.dataset.wish}`)
        }
    }
)