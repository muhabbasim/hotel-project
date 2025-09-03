import { useRef, memo } from 'react';

// third-party
import { Map, Layer, Source, MapRef, LngLatLike, GeoJSONSource, MapLayerMouseEvent } from 'react-map-gl';

// project-import
import { clusterCountLayer, clusterLayer, unclusteredPointLayer } from './layers';

// types
import { MapBoxProps } from 'types/map';

// ==============================|| MAP - CLUSTERS ||============================== //

function MapClusters({ ...other }: MapBoxProps) {
  const mapRef = useRef<MapRef>(null);

  const onClick = (event: MapLayerMouseEvent) => {
    const feature = event.features?.[0];
    const clusterId = feature?.properties?.cluster_id;

    // @ts-ignore
    const mapboxSource = mapRef.current?.getSource('earthquakes') as GeoJSONSource;

    // @ts-ignore
    mapboxSource.getClusterExpansionZoom(clusterId, (error: any, zoom: number) => {
      if (error) {
        return;
      }

      if (feature?.geometry.type === 'Point') {
        mapRef.current?.easeTo({
          center: feature?.geometry.coordinates as LngLatLike | undefined,
          zoom: Number.isNaN(zoom) ? 3 : zoom,
          duration: 500
        });
      }
    });
  };

  return (
<></>
  );
}

export default memo(MapClusters);
