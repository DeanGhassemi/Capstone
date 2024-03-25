<style>
    /* Custom CSS for black outline on the right side of the sidebar */
    .sidebar {
        border-right: 2px solid black;
        background-color: #422768;
    }

    /* Apply background color to the entire page */
    .background {
        background-color: #343434;
        height: 100vh;
        display: flex;
    }
    .sideBtns{
        border-radius: 20px;
    }
    .previousChats{
        border-radius: 10px;
    }
    .previousChats:hover{
        background-color: 9B7BCC;
        opacity: 50%;
    }
    .previousChatsLabel{
        color:#A4A2A2;

    }

    /* Chat container */
        .chat-container {
            width: 70%;
            margin: auto; /* Center horizontally */
            margin-top: 10%; /* Center vertically */
            border-radius: 8px;
            background-color: #2d2d2d;
            border: 1px solid black;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }

        /* Chat messages */
        .chat-messages {
            height: 300px;
            overflow-y: auto;
            margin-bottom: 20px;
        }

        /* Chat input box */
        .chat-input {
            background-color: #7B4EBC;
            width: calc(100% - 80px);
            padding: 10px;
            border: 1px solid black;
            border-radius: 6px;
            outline: none;
            font-size: 16px;
            margin-right: 10px;
        }

        /* Send button */
        .send-button {
            width: 60px;
            height: 40px;
            background-color: #B297D8;
            border: none;
            border-radius: 6px;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
</style>
    <main class="background">
        <!-- Left Sidebar -->
        <div class="flex-none w-42 text-white sidebar">
            <div class="flex flex-col h-full p-4">
                <!-- Home Button -->
                <button class="sideBtns w-36 h-14 mb-4 bg-purple-800">Home</button>
                
                <!-- Learn Routes Button -->
                <button class="sideBtns w-36 h-14 mb-4 bg-purple-800">Learn Routes</button>
                
                <!-- Settings Button -->
                <button class="sideBtns w-36 h-14 bg-purple-800">Settings</button>
                <hr class="my-2">
                <label class="previousChatsLabel text-center mt-5">Previous chats</label>
                <button class="previousChats mt-2">Demo history</button>
                <button class="previousChats mt-2">Demo history</button>
            </div>
        </div>
        <!-- Main Content Area -->
        <div class="flex flex-grow flex-row">
            <div class="chat-container">
                <div class="chat-messages">
                    <!-- Chat messages will be displayed here -->
                </div>
                <div class="chat-input-container">
                    <input type="text" class="chat-input" placeholder="Type your message...">
                    <button class="send-button">Send</button>
                </div>
            </div>
            <div class="text-left justify-center items-center mx-10">
                <button class="send-button">Advanced Options</button>
            </div>
        </div>
    </main>
