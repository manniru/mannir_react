import React, { Component } from 'react';
import CreatePDF from 'node-react-pdfmake/component'

class componentName extends Component {

    getPDFDefinition() {
        return { content: 'PDF content' }
      }
      
    render() {
        return (
            <div>
                  <CreatePDF path='/createpdf' ref='createpdf' definition={this.getPDFDefinition()} name='document' />

            </div>
        );
    }
}

export default componentName;