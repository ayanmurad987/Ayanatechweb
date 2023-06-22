import 'react-quill/dist/quill.snow.css';
// import dynamic from '`next/dynamic`';
import { styled } from '@mui/material/styles';
import ReactQuill from 'react-quill'

// const Quill = dynamic(() => import('react-quill'), { ssr: false });

const QuillEditorRoot = styled(ReactQuill)(({ }) => ({
  border: 0,
  height: "fit-content",
  disabled: 'true',
  padding: '0px',
  borderColor: '#616ded',
  borderRadius: '16px',
  borderStyle: 'solid',
  display: 'flex',
  flexDirection: 'column',
  '& .ql-snow.ql-toolbar': {
    display: 'none',
    borderColor: '#616ded',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    textAlign: 'left',
    '& .ql-picker-label:hover': {
      color: '#616ded',
    },
    '& .ql-picker-label.ql-active': {
      color: '#616ded'
    },
    '& .ql-picker-item:hover': {
      color: '#616ded'
    },
    '& .ql-picker-item.ql-selected': {
      color: '#616ded'
    },
    '& button:hover': {
      color: '#616ded',
      '& .ql-stroke': {
        color: '#616ded'
      }
    },
    '& button:focus': {
      color: '#616ded',
      '& .ql-stroke': {
        color: '#616ded',
      }
    },
    '& button.ql-active': {
      '& .ql-stroke': {
        color: '#616ded'
      }
    },
    '& .ql-stroke': {
      color: '#616ded'
    },
    '& .ql-picker': {
      color: '#616ded'
    },
    '& .ql-picker-options': {
      backgroundColor: '#000000',
      border: 'none',
      borderRadius: '16px',
      // boxShadow: theme.shadows[10],
      padding: '2px'
    }
  },
  '& .ql-snow.ql-container': {
    borderBottom: 'none',
    borderColor: '#616ded',
    borderLeft: 'none',
    borderRight: 'none',
    flexGrow: 1,
    overflow: 'hidden',

    '& .ql-editor': {
      // textAlign: 'center',
      // color: '#616ded',
      // fontFamily: theme.typography.body1.fontFamily,
      // fontSize: theme.typography.body1.fontSize,
      // textAlign: 'justify',
      padding: '2px',
      fontSize: '16px',
      '&.ql-blank::before': {
        color: '#000000',
        fontStyle: 'normal',
        left: '2px',
        fontSize: '16px'
      }
    }
  }
}));

const AdminQuillEditorRoot = styled(ReactQuill)(({ }) => ({
  border: 1,
  // borderColor: theme.palette.divider,
  // borderRadius: theme.shape.borderRadius,
  borderStyle: 'solid',
  display: 'flex',
  flexDirection: 'column',
  
  '& .ql-snow.ql-toolbar': {
    // borderColor: theme.palette.divider,
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',

    '& .ql-picker-label:hover': {
      // color: theme.palette.primary.main
    },
    '& .ql-picker-label.ql-active': {
      // color: theme.palette.primary.main
    },
    '& .ql-picker-item:hover': {
      // color: theme.palette.primary.main
    },
    '& .ql-picker-item.ql-selected': {
      // color: theme.palette.primary.main
    },
    '& button:hover': {
      // color: theme.palette.primary.main,
      '& .ql-stroke': {
        // stroke: theme.palette.primary.main
      }
    },
    '& button:focus': {
      // color: theme.palette.primary.main,
      '& .ql-stroke': {
        // stroke: theme.palette.primary.main
      }
    },
    '& button.ql-active': {
      '& .ql-stroke': {
        // stroke: theme.palette.primary.main
      }
    },
    '& .ql-stroke': {
      // stroke: theme.palette.text.primary
    },
    '& .ql-picker': {
      // color: theme.palette.text.primary
    },
    '& .ql-picker-options': {
      // backgroundColor: theme.palette.background.paper,
      border: 'none',
      // borderRadius: theme.shape.borderRadius,
      // boxShadow: theme.shadows[10],
      // padding: theme.spacing(2)
    }
  },
  '& .ql-snow.ql-container': {
    borderBottom: 'none',
    // borderColor: theme.palette.divider,
    borderLeft: 'none',
    borderRight: 'none',
    flexGrow: 1,
    overflow: 'hidden',
    '& .ql-editor': {
      // color: theme.palette.text.primary,
      // fontFamily: theme.typography.body1.fontFamily,
      // fontSize: theme.typography.body1.fontSize,
      // padding: theme.spacing(2),
      '&.ql-blank::before': {
        // color: theme.palette.text.secondary,
        fontStyle: 'normal',
        // left: theme.spacing(2)
      }
    }
  }
}));

const modules1 = {
  toolbar: [
    [{ 'font': [] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'align': [] }],
    [{ 'direction': 'rtl' }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],

  ],
}

const modules = {
  toolbar: [
    [{ 'font': [] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'align': [] }],
    [{ 'direction': 'rtl' }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'color': [] }, { 'background': [] }],
    // [{ 'script': 'sub' }, { 'script': 'super' }],
    // ['blockquote', 'code-block'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
    //  { 'indent': '-1' }, { 'indent': '+1' }
    ],
    ['link', 'image', 'video'],
    ['clean']
  ],
}
export const QuillEditor = (props) => (
  <QuillEditorRoot modules={modules} {...props} />
);

export const AdminQuillEditor = (props) => (
  <AdminQuillEditorRoot modules={props.quiz ? modules1 : modules} {...props} />
);