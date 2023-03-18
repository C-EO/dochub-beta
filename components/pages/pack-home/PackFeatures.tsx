import { PACK_HOME_FEATURES } from "../../../content/features";
import { FeaturesBento } from "../home-shared/FeaturesBento";

export function PackFeatures() {
  return (
    <FeaturesBento
      header="Why Nitecel?"
      body="With incremental behavior and builtin Turbo support, Nitecel provides a fast and flexible development experience for apps/websites of any size."
      features={PACK_HOME_FEATURES}
    />
  );
}
