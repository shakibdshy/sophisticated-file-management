# Sophisticated File Management System

Kickstart start your collaborative Next.js app with this Template.

This is a [Next.js](https://nextjs.org/) project bootstrapped using [`create-next-app`](https://github.com/vercel/next.js/tree/HEAD/packages/create-next-app) with Material UI installed.

## How to use

First, clone the repo:

```bash
git clone https://github.com/shakibdshy/sophisticated-file-management.git
cd next-auth-example
```

Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Create a `.env` file in the root of the project and add the following variables:

```bash
DATABASE_URL=your-database-url

AUTH_SECRET=your-auth-secret

GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

UPLOADTHING_SECRET=your-uploadthing-secret
UPLOADTHING_APP_ID=your-uploadthing-app-id

NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_API_KEY=your-liveblocks-public-api-key
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Features

1. Aetup and Architecture
   - Set up a Next.js project with MUI.
   - Implement a user authentication system using NextAuth.js.
   - Design a responsive layout with MUI components.
2. Role-Based Access Control:
   - Implement different user roles (e.g., admin, editor, viewer) with specific permissions.
3. File Management
   - Implement file upload functionality to support images and PDFs.
4. Drawing and Editing Features:
   - Integrate a canvas component that allows users to draw shapes (circles, rectangles, etc.), lines, and freehand drawings.
   - Implement drag-and-drop functionality for shapes and lines.
   - Enable color selection and line thickness adjustments.
   - Add an eraser tool to remove specific parts of drawings.
5. Advanced Drawing Tools:
   - Implement a text tool to add and edit text on the canvas.
   - Add support for layers, allowing users to create and manage multiple layers of drawings.
6. Annotations and Comments:
   - Allow users to add annotations and comments to their drawings.
   - Implement a commenting system that allows users to leave comments on specific parts of the drawing.
   - Enable users to reply to comments and view replies.
7. Collaboration and Sharing:
   - Implement real-time collaboration features, allowing multiple users to work on the same drawing simultaneously.
   - Enable users to share their drawings with others by providing a shareable link.
8. Export and Download:
   - Provide users with the ability to export their drawings as PDFs.
9. Undo/Redo Functionality:
   - Implement undo/redo functionality to allow users to revert changes made to their drawings.

10. Collaboration Features:
    - Enable real-time collaboration using Liveblocks.
    - Implement a user presence feature to show active collaborators on the file.
11. Customizable UI:
    - Allow users to customize the UI by changing colors, Themes, and other visual elements.
12. Data Encryption:
    - Implement data encryption to protect sensitive information such as user credentials and file contents.
13. Advanced Search and Filtering.
14. Provide an analytics dashboard to track user activity, file usage, and collaboration metrics.
15. Plugin Architecture:
    - Allow users to extend the functionality of the app by adding plugins.
16. Mobile Compatibility:

# TODO List

- [ ] Create a file viewer to display uploaded files.
- [ ] Fixing the bug of the Drawing Canvas not working properly.
- [ ] Implement snapping and alignment guides to help users draw more precisely.
- [ ] Provide measurement tools to display dimensions of shapes and lines.
- [ ] Provide users with the ability to export their drawings as Images.
- [ ] Implement functionality to save the edited file in the cloud (e.g., AWS S3).
- [ ] Implement version control to track changes and allow users to revert to previous versions.
- [ ] Provide a library of pre-defined templates that users can apply to their files.
- [ ] Enable batch processing for uploading, editing, and exporting multiple files
simultaneously.
- [ ] Improve the plugin architecture to allow users to extend the functionality of the app.
- [ ] Ensure full compatibility and responsiveness on mobile devices, including touch
interactions for drawing and editing