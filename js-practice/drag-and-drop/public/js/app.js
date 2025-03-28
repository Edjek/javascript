const list = document.querySelectorAll('.drag-item');
let draggedItem = null;

list.forEach(function (item) {
    item.addEventListener('dragstart', function () {
        console.log(this);
        this.classList.add('dragging');
        draggedItem = this;
    });

    item.addEventListener('dragend', function () {
        this.classList.remove('dragging');
        draggedItem = null;
    });

    item.addEventListener('dragover', function (e) {
        e.preventDefault();
        this.classList.add('dragover');
    });

    item.addEventListener('dragenter', function (e) {
        e.preventDefault();
    });

    item.addEventListener('dragleave', function (e) {
        this.classList.remove('dragover');
    });

    item.addEventListener('drop', function (e) {
        this.classList.remove('dragover');
        this.after(draggedItem);
    });
});
