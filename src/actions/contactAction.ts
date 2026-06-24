"use server"

export interface ContactInput {
  name: string
  email: string
  phone: string
  situation: string
}

export interface ActionResponse {
  success: boolean
  message: string
  error?: string
}

/**
 * Server Action to submit contact details and current user situation.
 */
export async function submitContactAction(
  formData: ContactInput
): Promise<ActionResponse> {
  try {
    // Validate inputs
    if (!formData.name || !formData.email || !formData.phone) {
      return {
        success: false,
        message: "Error de validación",
        error: "Por favor, completa los campos requeridos (nombre, correo y teléfono)."
      }
    }

    // In a real application, here we would insert into database (e.g., Supabase)
    // or trigger an integration (e.g., n8n webhook)
    console.log("Saving new lead to the database:", formData)
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Tu solicitud ha sido recibida con éxito. César se pondrá en contacto contigo pronto."
    }
  } catch (err: any) {
    console.error("Error in submitContactAction Server Action:", err)
    return {
      success: false,
      message: "Hubo un error inesperado al procesar tu solicitud.",
      error: err.message || "Unknown error"
    }
  }
}
