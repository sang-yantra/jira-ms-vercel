import PbiServices from "../../application/services/pbisService.js";
import { catchErrors } from "../../domain/errors/asyncCatch.js";

export const createManyPbis = catchErrors(async (req, res) => {
  const pbis = new PbiServices().createManyPbi();
  res.json(pbis);
});
