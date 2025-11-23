import {Container} from "@/components/ui/Container";

export const Footer = () => {
  return(
    <footer className={"bg-gray-900 text-gray-400 py-8"}>
      <Container className={"flex flex-col md:flex-row justify-between " +
        "items-center"}>
        <p>&copy; 2025 Storyby Test.</p>
        <div className="mt-4 md:mt-0 space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="mailto:contact@example.com"
             className="hover:text-white"
          >
            contact@example.com
          </a>
        </div>

      </Container>
    </footer>
  )
}