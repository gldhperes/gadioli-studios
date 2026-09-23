import type { IDriveCategory, IDriveImage } from "../interfaces/ICategory";

const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
// const API_KEY = "1t-ebdtbkiAOytCW4AjGNEPnbSQHwnI6O"

const DRIVE_API_URL = "https://www.googleapis.com/drive/v3/files";

interface DriveFile {
    id: string;
    name: string;
    mimeType: string;
    thumbnailLink?: string;
    webContentLink?: string;
}

interface DriveResponse {
    files: DriveFile[];
    nextPageToken?: string;
}

async function getFiles(
    query: string,
    fields: string = "files(id,name,mimeType)"
): Promise<DriveFile[]> {

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        fields,
        pageSize: "1000",
    });

    console.log("🔎 Buscando no Google Drive...");
    console.log("Query:", query);

    const response = await fetch(
        `${DRIVE_API_URL}?${params.toString()}`
    );

    console.log("Status:", response.status);

    if (!response.ok) {
        const error = await response.text();

        console.error("❌ Erro da Google Drive API:");
        console.error(error);

        throw new Error("Erro ao buscar arquivos do Google Drive");
    }

    const data: DriveResponse = await response.json();

    console.log("📦 Resultado:", data);

    return data.files;
}

async function getCategories(
    rootFolderId: string
): Promise<DriveFile[]> {

    console.log("📁 Buscando categorias...");
    console.log("Root folder:", rootFolderId);

    const query = [
        `'${rootFolderId}' in parents`,
        `mimeType = 'application/vnd.google-apps.folder'`,
        `trashed = false`,
    ].join(" and ");

    const categories = await getFiles(
        query,
        "files(id,name,mimeType)"
    );

    console.log("📁 Categorias encontradas:", categories);

    return categories;
}

async function getImagesFromCategory(
    categoryId: string
): Promise<IDriveImage[]> {

    console.log("🖼️ Buscando imagens da categoria:", categoryId);

    const query = [
        `'${categoryId}' in parents`,
        `mimeType contains 'image/'`,
        `trashed = false`,
    ].join(" and ");

    const files = await getFiles(
        query,
        "files(id,name,mimeType,thumbnailLink,webContentLink)"
    );

    console.log("🖼️ Imagens encontradas:", files);

    const images = files.map((file) => ({
        id: file.id,
        name: file.name,
        mimeType: file.mimeType,
        url: file.webContentLink ?? "",
    }));

    console.log("🖼️ Imagens convertidas:", images);

    return images;
}

export async function getDriveCategories(
    rootFolderId: string
): Promise<IDriveCategory[]> {

    console.log("🚀 Iniciando busca no Google Drive...");
    console.log("📂 Pasta principal:", rootFolderId);

    const categories = await getCategories(rootFolderId);

    const result = await Promise.all(
        categories.map(async (category) => {

            const images = await getImagesFromCategory(category.id);

            return {
                id: category.id,
                name: category.name,
                images,
            };
        })
    );

    console.log("=================================");
    console.log("✅ RESULTADO FINAL");
    console.log("=================================");
    console.log(result);

    return result;
}