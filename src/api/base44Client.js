// 🛑 BASE44 DEPENDENCY REMOVED: Running in standalone, static mode.
// This is the complete mock client to bypass all SDK dependencies.

console.log("BASE44 MOCK ACTIVE: All backend and integration calls are inert.");

// --- Core Mocking Functions ---
// Used for asynchronous calls (API, DB, LLM)
const asyncNoOp = async () => null;
// Used for synchronous functions/getters
const syncNoOp = () => ({}); 

// Helper interface for database/entity calls (list, get, etc.)
const mockCollectionInterface = {
    list: async () => [], // Returns an empty array for data lists
    get: asyncNoOp,
    create: asyncNoOp,
    update: asyncNoOp,
    delete: asyncNoOp,
};


// The exported object that mimics the full Base44 SDK structure
export const base44 = {
  // 1. Database/Collection Mock
  collection: (collectionName) => mockCollectionInterface,
  
  // 2. Storage/File Mock
  storage: {
    getUrl: () => "",
    upload: asyncNoOp,
    delete: asyncNoOp,
  },

  // 3. Authentication Mock
  auth: {
    getUser: asyncNoOp,
    signIn: asyncNoOp,
    signOut: asyncNoOp,
    onAuthStateChanged: syncNoOp, 
  },

  // 4. Entities Mock
  entities: {
    Project: mockCollectionInterface,
    Post: mockCollectionInterface,
    Testimonial: mockCollectionInterface,
  },
  
  // 5. Integrations Mock
  integrations: {
    Core: {
        InvokeLLM: asyncNoOp,
        SendEmail: asyncNoOp,
        UploadFile: asyncNoOp,
        GenerateImage: asyncNoOp,
        ExtractDataFromUploadedFile: asyncNoOp,
        CreateFileSignedUrl: asyncNoOp,
        UploadPrivateFile: asyncNoOp,
    },
  }
};
