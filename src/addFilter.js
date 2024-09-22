export function addFilter () {
    content.innerHTML += `
        <div id="filter-div">
            <label for="filter">Food type:</label>
            <select id="filter" name="filter">
                <option value="all" selected>All</option>
                <option value="dry">Dry</option>
                <option value="wet">Wet</option>
            </select>
        </div>
    `
    const filter = document.querySelector("#filter")
    return filter
}