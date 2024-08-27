import { Router } from "express";
import { SchoolRoutes } from "../app/module/Student/Student.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/",
    route: SchoolRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
