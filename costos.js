// src/Costos.js
import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

export default function Costos() {
  const [costos, setCostos] = useState([
    { id: "1", descripcion: "Alimento", monto: 100 },
    { id: "2", descripcion: "Vacunas", monto: 50 },
  ]);

  const agregarCosto = () => {
    const nuevo = {
      id: (costos.length + 1).toString(),
      descripcion: "Nuevo costo",
      monto: 75,
    };
    setCostos([...costos, nuevo]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pantalla de Costos</Text>
      <FlatList
        data={costos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.descripcion}: ${item.monto}
          </Text>
        )}
      />
      <Button title="Agregar costo" onPress={agregarCosto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 5 },
});
