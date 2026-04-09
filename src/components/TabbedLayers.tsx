import type { Layer } from "@/types/CallSystemType";
import { useState } from "react";
import TabBar from "@/components/TabBar";
import LayerPanel from "@/components/LayerPanel";

type TabbedLayersProps = {
  layers: Layer[];
};

const TabbedLayers = ({ layers }: TabbedLayersProps) => {
  const [active, setActive] = useState(layers[0]?.id ?? "");
  const currentLayer =
    layers.find((layer: Layer) => layer.id === active) ?? layers[0];

  const tabs = layers.map((layer: Layer) => ({
    id: layer.id,
    label: layer.tab ?? "",
  }));

  if (!currentLayer) return null;

  return (
    <>
      <TabBar tabs={tabs} active={active} onChange={setActive} />
      <LayerPanel key={currentLayer.id} layer={currentLayer} />
    </>
  );
};

export default TabbedLayers;
