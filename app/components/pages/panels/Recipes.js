/* ************************************************************************ */
/*
    
*/
import React from 'react';

// https://github.com/raythree/reactjs-bootstrap-table-demo
import BootstrapTable from 'reactjs-bootstrap-table';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      recipeName: 'Super Beer #' + id,
      style: 'Lager #' + id,
      brewDate: new Date().toLocaleDateString(),
      id: 'superbeer'+id, 
      _id: id
    });
  }
}

addProducts(20);


// change to match model schema as needed
//
// NOTE: There can be additional key/value pairs in 
// the data and as long as they're not associated 
// with column names they won't be displayed. And 
// the extra key/value pairs will make it all the
// way to the on click event handler. 

 
let columns = [
  { name: 'recipeName', display:'Name' },
  { name: 'style', display:'Style' },
  { name: 'brewDate', display:'Brew Date' }
]

export default class RecipeList extends React.Component {

    onRecipeClick(recipe) {
        // NOTE: _id is seen
        console.log(recipe);
    }

    render() {
        return (
            <div>
                <BootstrapTable 
                    data={products}
                    headers={true}
                    select={"single"}
                    tableClass={"table table-hover"}
                    disableSelectText={true}
                    activeClass={"success"}
                    bodyHeight={"3em"} 
                    resize={{extra: 0, minSize: 50}}
                    onRowClicked={this.onRecipeClick} 
                    columns={columns}>
    
                    <div style={{margin: "3em", border: "1px solid gray", padding: "1em"}} className="well well-success">
                        <p>No recipes found.</p>
                        <p>Click Create to start a new recipe.</p>
                    </div>
    
                </BootstrapTable>
            </div>
        );
    }
}


/*

                <BootstrapTable 
                    columns={columns} 
                    headers={true} 
                    data={products} 
                    bodyHeight={'3em'} 
                    resize={{extra: 0, minSize: 50}} 
                    onRowClicked={this.onRecipeClick} 
                    disableSelectText={true} 
                    activeClass={'success'} 
                />



                <BootstrapTable 
                    data={products}
                    headers={true}
                    select={'single'}
                    tableClass={'table table-hover'}
                    disableSelectText={true}
                    activeClass={'success'}
                    bodyHeight={'3em'} 
                    resize={{extra: 0, minSize: 50}}
                    onRowClicked={this.onRecipeClick} 
                    columns={columns}>
    
                    <div style={{margin: '3em', border: '1px solid gray', padding: '1em'}} className="well well-success">
                        <p>This DIV is shown when there is no data in the table. When empty the table renders
                        the child element of the table.</p>
                        <p>Click Reload Data to load new data.</p>
                    </div>
    
                </BootstrapTable>




            <BootstrapTable data={this.props.data}
              headers={this.props.options.headers}
              select={this.props.options.select}
              tableClass={this.props.options.tableClass}
              disableSelectText={this.props.options.disableSelectText}
              activeClass={this.props.options.activeClass}
              resize={resize}
              selected={this.props.selected}
              onChange={this.onChange}
              onSort={this.onSort}
              columns={columns}>

*/