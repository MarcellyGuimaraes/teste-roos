const sharp = require("sharp");

const convertToBase64 = async (file) => {
  try {
    // Redimensiona e comprime a imagem
    const compressedBuffer = await sharp(file.buffer)
      .resize(800, 800, {
        // tamanho máximo
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({ quality: 70 }) // compressão JPEG
      .toBuffer();

    const base64String = compressedBuffer.toString("base64");
    const mimeType = "image/jpeg"; // agora sempre será JPEG
    return `data:${mimeType};base64,${base64String}`;
  } catch (error) {
    throw error;
  }
};

module.exports = { convertToBase64 };
