
import sys
from PySide6.QtWidgets import (
    QApplication, QWidget, QVBoxLayout,
    QLabel, QPushButton, QCheckBox, QColorDialog
)
from PySide6.QtCore import Qt
from PySide6.QtGui import QShortcut, QKeySequence, QColor


class RustVision(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("RUST VISION")
        self.setFixedSize(380, 430)

        self.setStyleSheet("""
            QWidget {
                background: #11111b;
                color: white;
                font-size: 15px;
            }
            QPushButton {
                background: #7c3aed;
                padding: 12px;
                border-radius: 8px;
            }
            QLabel {
                padding: 8px;
            }
        """)

        layout = QVBoxLayout(self)

        title = QLabel("RUST VISION")
        title.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(title)

        layout.addWidget(QLabel("INSERT — OPEN / CLOSE"))

        self.highlight = QCheckBox("Overlay enabled")
        self.highlight.setChecked(True)
        layout.addWidget(self.highlight)

        self.glow = QCheckBox("Glow effect")
        self.glow.setChecked(True)
        layout.addWidget(self.glow)

        self.boxes = QCheckBox("Player boxes")
        self.boxes.setChecked(True)
        layout.addWidget(self.boxes)

        self.names = QCheckBox("Player names")
        layout.addWidget(self.names)

        self.color = "#a855f7"

        color_button = QPushButton("CHANGE COLOR")
        color_button.clicked.connect(self.change_color)
        layout.addWidget(color_button)

        close_button = QPushButton("CLOSE")
        close_button.clicked.connect(self.hide)
        layout.addWidget(close_button)

        self.shortcut = QShortcut(QKeySequence("Insert"), self)
        self.shortcut.setContext(Qt.ShortcutContext.ApplicationShortcut)
        self.shortcut.activated.connect(self.toggle)

        layout.addWidget(QLabel("RUST VISION v1.0"))
        layout.addWidget(QLabel("Visual demo only"))

    def toggle(self):
        if self.isVisible():
            self.hide()
        else:
            self.show()
            self.activateWindow()

    def change_color(self):
        color = QColorDialog.getColor(QColor(self.color), self)
        if color.isValid():
            self.color = color.name()


app = QApplication(sys.argv)
window = RustVision()
window.show()
sys.exit(app.exec())
