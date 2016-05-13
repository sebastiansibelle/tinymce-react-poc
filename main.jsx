import React from 'react';
import ReactDOM from 'react-dom';
import TinyMCE from 'react-tinymce';

const App = React.createClass({
  handleEditorChange(e) {
    console.log('Content was updated:', e.target.getContent());
  },

  render() {
    return (
      <TinyMCE
        content="<p>This is the initial content of the editor</p>"
        config={{
          plugins: 'link image code paste',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
          paste_data_images: true,
          automatic_uploads: true,
          images_upload_handler: (blobInfo, success, failure) => {
            debugger;
          }
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));
