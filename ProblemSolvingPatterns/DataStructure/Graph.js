/* 
*   Graphs - Undirected:
*       - 
*/

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    
    //Add the vertex
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    //Add the edge
    addEdge(vertex1,vertex2) {
        //Undirected graph so add in both.
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            if(!this.checkExists(vertex1,vertex2)) this.adjacencyList[vertex1].push(vertex2);
            if(!this.checkExists(vertex2,vertex1)) this.adjacencyList[vertex2].push(vertex1);
        }
    }
    //Check exists
    checkExists(vertex1,vertex2) {
        //Check if already present.
        let found = false;
        for (const edge of this.adjacencyList[vertex1]) {
            if(edge === vertex2) {
                found = true;
                break;
            }
        }
        return found;
    }

    //Helper - Remove the edge.
    removeEdge(vertex1,vertex2) {
        //Undirected graph so add in both.
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            //Remove v2 from v1.
            this.adjacencyList[vertex1] = this.newArray(vertex1,vertex2);

            //Remove v1 from v2.
            this.adjacencyList[vertex2] = this.newArray(vertex2,vertex1);
        }
    }
    //Helper function - return new array without given edge
    newArray(vertex1,vertex2) {
        //--- Method 1.
        /* let newEdgeArr = [];
        for (const edge of this.adjacencyList[vertex1]) {
            if(edge !== vertex2) newEdgeArr.push(edge); 
        }
        return newEdgeArr; */
        
        //--- Method 2 using built in filter method.
        return this.adjacencyList[vertex1].filter(v => v !== vertex2);

    }

    //Remove vertex.
    removeVertex(removedVertex) {
        //Check the existence.
        if(this.adjacencyList[removedVertex]) {
            let edges = this.adjacencyList[removedVertex];
            for (const edge of edges) {
                if(this.adjacencyList[edge]){
                    this.adjacencyList[edge] = this.newArray(edge,removedVertex);
                }
            }
            delete this.adjacencyList[removedVertex];
        }
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
