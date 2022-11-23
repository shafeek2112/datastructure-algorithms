
//Simple class for weighted graph.
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    //Add veretex.
    addVertex(veretex) {
        //Check if the vertex is already present or not.
        if(!this.adjacencyList[veretex]) this.adjacencyList[veretex] = [];
    }

    //Add Edges
    addEdge(veretex1,veretex2,weight) {
        if(this.adjacencyList[veretex1] && this.adjacencyList[veretex2]) {
            //Everytime overwrite the existing value if its already exists.
            this.adjacencyList[veretex1].push({veretex: veretex1, weight:weight});
            this.adjacencyList[veretex2].push({veretex: veretex2, weight:weight});
        }
    }
}

class ProrityQueue {
    
}