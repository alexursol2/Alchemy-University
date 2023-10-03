class Tree {
    constructor() {
        this.root = null;
    }

    hasNode(data) {
        return this.searchRoot(this.root, data)
    }

    searchRoot(root, data) {
        if(!root) {
            return false; // якщо нічого нема то вибиває false
        }
        if(root.data === data) {
            return true; // якщо = то повертається правда
        }
        if(root.data > data) {
            return this.searchRoot(root.left, data); // перевіряємо ліву частину 
        }
        if(root.data < data) {
            return this.searchRoot(root.right, data); // перевіряємо праву частину 
        }
    }

    addNode(node) {
        if(!this.root) {
            this.root = node;
        }
        this.addToRoot(this.root, node);
    }

    addToRoot(root, node) {
        if (node.data < root.data) {
            if (!root.left) {
                root.left = node;
            }
            else {
                this.addToRoot(root.left, node);
            }
        }

        if (node.data > root.data) {
            if (!root.right) {
                root.right = node;
            }
            else {
                this.addToRoot(root.right, node);
            }
        }
    }
}

module.exports = Tree;