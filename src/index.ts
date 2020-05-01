import ApiBuilder from "claudia-api-builder";

// Annoucements
import announces from "./assets/api/announces/get.announces.json";
import announce_customers from "./assets/api/announces/get.announces-customers.json";

// Contact Us
import contactus_workzones from "./assets/api/contactus/get.contactus-workzones.json";
import contactus from "./assets/api/contactus/get.contactus.json";

// Links
import links from "./assets/api/links/get.links.json";

// Invoices
import invoice from "./assets/api/invoices/get.invoice-details.json";
import filters from "./assets/api/invoices/get.invoice-filters.json";
import invoices from "./assets/api/invoices/get.invoices.json";

// Notes
import notes from "./assets/api/notes/get.notes.json";
import note from "./assets/api/notes/get.note.json";
import note_customers from "./assets/api/notes/get.note-customers.json";

// Proposals
import proposal from "./assets/api/proposals/get.proposal-details.json";
import proposals from "./assets/api/proposals/get.proposals.json";

// SRW
import srw from "./assets/api/service-request/get.service-request-contact-info.json";
import srw_wo from "./assets/api/service-request/get.service-request-create-work-order.json";
import srw_level from "./assets/api/service-request/get.service-request-drill-down-level.json";
import srw_nte from "./assets/api/service-request/get.service-request-nte-work-order.json";
import srw_wo_det from "./assets/api/service-request/get.service-request-work-order.json";
import srw_wz from "./assets/api/service-request/get.service-request-workzones.json";

const api: any = new ApiBuilder();

// API Definitions:

api.get("/api/hello", () => "Hello world"); // TEST

// Annoucements
api.get("/api/announces/get.announces", () => { return announces; });
api.get("/api/announces/get.announces-customers", () => { return announce_customers; });

// Contactus
api.get("/api/contactus/get.contactus", () => { return contactus; });
api.get("/api/contactus/get.contactus-workzones", () => { return contactus_workzones; });

// Invoices
api.get("/api/invoices/get.invoice-details", () => { return invoice; });
api.get("/api/invoices/get.invoices", () => { return invoices; });
api.get("/api/invoices/get.invoice-filters", () => { return filters; });

// Links
api.get("/api/links/get.links", () => { return links; });

// Notes
api.get("/api/notes/get.note", () => { return note; });
api.get("/api/notes/get.notes", () => { return notes; });
api.get("/api/notes/get.note-customers", () => { return note_customers; });
api.post("/api/notes/post.note", () => { return note; });
api.put("/api/notes/put.note", () => { return note; });
api.delete("/api/notes/delete.note", () => { return note; });

// Proposals
api.get("/api/proposals/proposal-details", () => { return proposal; });
api.get("/api/proposals/proposals", () => { return proposals; });

// SRW
api.get("/api/service-request/get.service-request-contact-info", () => { return srw; });
api.get("/api/service-request/get.service-request-request-create-work-order", () => { return srw_wo; });
api.get("/api/service-request/get.service-request-drill-down-level", () => { return srw_level; });
api.get("/api/service-request/get.service-request-nte-work-order", () => { return srw_nte; });
api.get("/api/service-request/get.service-request-work-order", () => { return srw_wo_det; });
api.get("/api/service-request/get.service-request-workzones", () => { return srw_wz; });

export = api;
