# Archive / Feature Stash

This directory contains components, multi-step form flows, and backend schemas that are not currently in active routes but are preserved for future roadmap releases.

## Structure

- **`frontend/listings-wizard/`**:
  - Multi-step form wizard for creating and editing listings (`CreateListing.jsx`, `EditListing.jsx`, `ListingsDetails.jsx`, `FormProgress.jsx`).
  - Individual step components: `BasicInfoStep.jsx`, `PricingStep.jsx`, `ImageStep.jsx`, `LocationStep.jsx`.
- **`frontend/listings-components/`**:
  - Specialized listing UI components: `ImageManager.jsx`, `ImageUpload.jsx`, `ImageGallery.jsx`, `PriceHistory.jsx`, `BrowseListings.jsx`, `SellerInfoCard.jsx`, `RelatedListings.jsx`.
- **`frontend/ui/`**:
  - UI components and drafts: `Model.jsx` (modal dialog), `Sidebar.jsx`, `Profile.jsx`.
- **`backend/club-features/`**:
  - Club merchandise and ordering models: `club.model.js`, `clubOrder.model.js`, `clubProduct.model.js`.
- **`backend/future-schemas/`**:
  - MongoDB models and JSON schema specifications: `schemas.json`, `activityLog`, `analytics`, `chat`, `notification`, `report`, `reviews`, `settings`, `vendors`, `wishlist`.

## How to Restore

To re-enable any feature in the active application:
1. Move the corresponding file(s) back into `frontend/src/` or `backend/src/`.
2. Add necessary routing in `frontend/src/App.jsx` or `backend/src/app.js`.
3. If packages are required (e.g. `react-dropzone`), ensure they are listed in the workspace's `package.json`.

