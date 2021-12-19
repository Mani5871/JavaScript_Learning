console.log("parent");

container_node = document.getElementById("cont1");
console.log(container_node.childNodes);
console.log(container_node.children);
// ChildNodes considers text and comments. While children ignores them

node_name = container_node.childNodes[0].nodeName;
console.log(node_name);

node_names = [];
node_types = [];
child_nodes = container_node.childNodes;

Array.from(child_nodes).forEach(function(element)
{
    node_names.push(element.nodeName);
    node_types.push(element.nodeType);
});

console.log(node_names);
console.log(node_types);

/* Node Types 
    1. ELEMENT_NODE
    2. ATTRIBUTE_NODE
    3. TEXT_NODE
    4. CDATA_SECTION_NODE
    8. COMMENT_NODE
    9. DOCUMENT_NODE
    10. DOCUMENT_TYPE_NODE
*/

console.log(container_node.firstChild);
console.log(container_node.firstElementChild);
console.log(container_node.childElementCount);
// Similar for last element and last element child

console.log(container_node.firstChild.nextSibling);