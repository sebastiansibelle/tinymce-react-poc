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
          plugins: 'link image code lists searchreplace visualblocks hr contextmenu media paste autoresize',
          toolbar: 'code styleselect bold italic bullist numlist image media link | alignleft aligncenter alignright alignjustify | hr',
          menubar: false,
          style_formats: [
             { title: 'Normal text', inline: 'p' },
             { title: 'Big Heading', block: 'h1' },
             { title: 'Small Heading', block: 'h2' },
          ],
          media_live_embeds: true,
          // Allow image drag and drop
          // Dropped images are embedded with data uris
          //http://www.tinymce.com/wiki.php/Configuration:paste_data_images
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
