class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    addLeft(node) {
        this.left = node;
        node.parent = this;
    }

    addRight(node) {
        this.right = node;
        node.parent = this;
    };
}

/***************************************/
console.log("Sample Tree: ");

console.log("      2");
console.log("    /   \\");
console.log("   7     5");
console.log("  / \\      \\");
console.log(" 1   6       8");
/***************************************/

function createTree() {
    let two,
        seven,
        five,
        one,
        six,
        eight;

    two = new TreeNode(2);
    seven = new TreeNode(7);
    five = new TreeNode(5);
    two.addLeft(seven);
    two.addRight(five);
    one = new TreeNode(1);
    six = new TreeNode(6);
    seven.addLeft(one);
    seven.addRight(six);
    eight = new TreeNode(8);
    five.addRight(eight);


    return two;
}

function preOrder(node) {
    if (!node) {
        return;
    }

    preOrderResult.push(node.data);
    // console.log(node.data);

    if (node.left) {
        preOrder(node.left);
    }

    if (node.right) {
        preOrder(node.right);
    }
}

function inOrder(node) {
    if (!node) {
        return;
    }

    if (node.left) {
        inOrder(node.left);
    }

    inOrderResult.push(node.data);
    // console.log(node.data);

    if (node.right) {
        inOrder(node.right);
    }
}

function postOrder(node) {
    if (!node) {
        return;
    }

    if (node.left) {
        postOrder(node.left);
    }

    if (node.right) {
        postOrder(node.right);
    }

    postOrderResult.push(node.data);
    // console.log(node.data);
}


/***** Output *****/
let root = createTree(),
    preOrderResult = [],
    inOrderResult = [],
    postOrderResult = [];

console.log("\nOutput:");
console.log("==== Pre Order ======");
preOrder(root);
console.log(preOrderResult.join(', '));

console.log("==== In Order ======");
inOrder(root);
console.log(inOrderResult.join(', '));

console.log("==== Post Order ======");
postOrder(root);
console.log(postOrderResult.join(', '));

