import { createFileRoute } from "@tanstack/react-router";

import { InternSAApp } from "@/internsa/InternSAApp";

// Catch-all: the InternSA app handles its own client-side paths
// (/explore, /saved, /guides, /profile, /opportunities/:id, /admin/*, ...).
export const Route = createFileRoute("/$")({
  component: InternSAApp,
});
